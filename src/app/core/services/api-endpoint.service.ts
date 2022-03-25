import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { UrlBuilder } from 'src/app/shared/classes/url-builder';
import { Constants } from '../../config/constants';

@Injectable()
export class ApiEndpointService {

  constructor(
    // Application Constants
    private constants: Constants
  ) { }

  /* #region URL CREATOR */
  // URL
  private createUrl(pathUrl: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.ROOT_URL,
      pathUrl
    );
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(pathUrl: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.ROOT_URL,
      pathUrl
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(pathUrl: string, pathVariables: any[] = []): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.ROOT_URL,
      `${pathUrl}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  /* #endregion */

  /**
   * getEnpoint: Will build a URL along with the specified path provided in the parameter
   * this._apiEndpointService.getEndpoint(IpPath.MIS)
   */
  public getEnpoint(path: string): string {
    return this.createUrl(path);
  }

  /**
   * getEnpointWithQueryParam: Will build a URL with a Query Parameter along with the specified path provided in the parameter
   * @param path, {key: string, val: string}
   * this._apiEndpointService.getEnpointWithQueryParam(IpPath.MIS, {key: "id", value: "dit.radp4"})
   * 
   */
  public getEnpointWithQueryParam(path: string, ...queryParamsJsonArr: queryParamsObj[]): string {
    return this.createUrlWithQueryParameters(path, (qs: QueryStringParameters) => {
      queryParamsJsonArr.forEach(qp => {
        qs.push(qp.key, qp.val);
      })
    });
  }
  /**
   * getEnpoint: Will build a URL with Path Variables along with the specified path provided in the parameter
   * @param path, [pathVariable]
   * this._apiEndpointService.getEnpointWithPathVariables(IpPath.MIS, "v1", "imdp1")
   */
  public getEnpointWithPathVariables(path: string, ...pathVariable: any[]): string {
    return this.createUrlWithPathVariables(path, pathVariable);
  }
}

export interface queryParamsObj {
  key: string;
  val: string;
}