<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@lang('app/admin.page.title')</title>

    <!-- Fonts -->
    <link href="{{asset('dist/css/admin-app.css')}}" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id = "adminContent">

    </div>
  </body>
  <script type="text/javascript" src="{{ url('admin/translations.js') }}"></script>
  <script type="text/javascript" src="{{asset('dist/js/admin-app.js')}}"></script>
</html>
