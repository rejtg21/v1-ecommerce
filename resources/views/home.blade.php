<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@lang('app/home.page.title')</title>

    <!-- Fonts -->
    <link href="{{asset('dist/css/app.css')}}" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id = "homeContent">

    </div>
  </body>
  <script type="text/javascript" src="{{ url('home/translation.js') }}"></script>
  <script type="text/javascript" src="{{asset('dist/js/app.js')}}"></script>
</html>
