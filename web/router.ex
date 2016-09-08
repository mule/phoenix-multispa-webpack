defmodule ReleaseScheduleWebpack.Router do
  use ReleaseScheduleWebpack.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :elm_app do
    plug :put_layout, {ReleaseScheduleWebpack.LayoutView, :elm_app}
  end

  pipeline :react_app do
    plug :put_layout, {ReleaseScheduleWebpack.LayoutView, :react_app}
  end

  scope "/", ReleaseScheduleWebpack do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/releaseScheduleElm", ReleaseScheduleWebpack do
    pipe_through [:browser, :elm_app]
    get "/", ElmAppController, :index
  end

 scope "/releaseScheduleReact", ReleaseScheduleWebpack do
    pipe_through [:browser, :react_app]
    get "/", ReactAppController, :index
 end

  # Other scopes may use custom stacks.
  # scope "/api", ReleaseScheduleWebpack do
  #   pipe_through :api
  # end
end
