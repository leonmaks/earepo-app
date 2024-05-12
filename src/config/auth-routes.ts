export const AUTH_PFX = "/auth",
  /**
   * The prefix for API authentication routes
   * Routes that start with this prefix are used for API authentication purposes
   * @type {string}
   */
  API_AUTH_PFX = "/api/auth",
  /**
   * The default redirect path after logging in
   * @type {string}
   */
  DEFAULT_LOGIN_REDIRECT = "/settings",
  /**
   * An array of routes that are accessible to the public
   * These routes do not require authentication
   * @type {string[]}
   */
  PUBLIC_ROUTES = ["/", "/auth/new-verification"],
  /**
   * TODO: Зачем определять каждый путь отдельно если есть общий префикс AUTH_PRF?
   *
   * An array of routes that are used for authentication
   * These routes will redirect (after action) users to DEFAULT_LOGIN_REDIRECT
   * @type {string[]}
   */
  AUTH_ROUTES = [
    `${AUTH_PFX}/login`,
    `${AUTH_PFX}/register`,
    `${AUTH_PFX}/error`,
    `${AUTH_PFX}/reset`,
    `${AUTH_PFX}/new-password`,
  ]
