// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultMarketplaceMeteringHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput } from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommandInput, MeterUsageCommandOutput } from "./commands/MeterUsageCommand";
import { RegisterUsageCommandInput, RegisterUsageCommandOutput } from "./commands/RegisterUsageCommand";
import { ResolveCustomerCommandInput, ResolveCustomerCommandOutput } from "./commands/ResolveCustomerCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchMeterUsageCommandInput
  | MeterUsageCommandInput
  | RegisterUsageCommandInput
  | ResolveCustomerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchMeterUsageCommandOutput
  | MeterUsageCommandOutput
  | RegisterUsageCommandOutput
  | ResolveCustomerCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type MarketplaceMeteringClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of MarketplaceMeteringClient class constructor that set the region, credentials and other options.
 */
export interface MarketplaceMeteringClientConfig extends MarketplaceMeteringClientConfigType {}

/**
 * @public
 */
export type MarketplaceMeteringClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of MarketplaceMeteringClient class. This is resolved and normalized from the {@link MarketplaceMeteringClientConfig | constructor configuration interface}.
 */
export interface MarketplaceMeteringClientResolvedConfig extends MarketplaceMeteringClientResolvedConfigType {}

/**
 * <fullname>AWS Marketplace Metering Service</fullname>
 *          <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service
 *             API.</p>
 *          <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *          <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketplace metering and entitlement API permissions</a> in the
 *                 <i>AWS Marketplace Seller Guide.</i>
 *          </p>
 *          <p>
 *             <b>Submitting Metering Records</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>MeterUsage</i> - Submits the metering record for an AWS
 *                     Marketplace product. <code>MeterUsage</code> is called from an EC2 instance or a
 *                     container running on EKS or ECS.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>BatchMeterUsage</i> - Submits the metering record for a set of
 *                     customers. <code>BatchMeterUsage</code> is called from a software-as-a-service
 *                     (SaaS) application.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Accepting New Customers</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>ResolveCustomer</i> - Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a
 *                         <code>CustomerIdentifier</code>
 *
 *                     along with the <code>CustomerAWSAccountId</code> and
 *                     <code>ProductCode</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Paid container software products sold through AWS Marketplace must integrate
 *                     with the AWS Marketplace Metering Service and call the
 *                         <code>RegisterUsage</code> operation for software entitlement and metering.
 *                     Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call
 *                         <code>RegisterUsage</code>, but you can do so if you want to receive usage
 *                     data in your seller reports. For more information on using the
 *                         <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>BatchMeterUsage</code> API calls are captured by AWS CloudTrail. You can use
 *             Cloudtrail to verify that the SaaS metering records that you sent are accurate by
 *             searching for records with the <code>eventName</code> of <code>BatchMeterUsage</code>.
 *             You can also use CloudTrail to audit records over time. For more information, see the
 *                     <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>.</i>
 *          </p>
 * @public
 */
export class MarketplaceMeteringClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MarketplaceMeteringClientResolvedConfig
> {
  /**
   * The resolved configuration of MarketplaceMeteringClient class. This is resolved and normalized from the {@link MarketplaceMeteringClientConfig | constructor configuration interface}.
   */
  readonly config: MarketplaceMeteringClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MarketplaceMeteringClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultMarketplaceMeteringHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: MarketplaceMeteringClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
