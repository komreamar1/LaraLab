<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title id="wecomeTittle"> </title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script type="text/javascript">
                let wecomeTittle = document.getElementById('wecomeTittle');
                let pageInformation = ["🧑🏼‍🔬 Scientific Universe 🍷","{{$meta}}"];
                function taggleTittleInnerHtml (argument=pageInformation) {
                    wecomeTittle.innerHTML = pageInformation[Math.floor(Math.random() * pageInformation.length)]  
                }
                setInterval(taggleTittleInnerHtml, 1000);
        </script>
        <!-- Styles -->
        @viteReactRefresh
        @vite('resources/act/app.tsx')
           <body>
               
           </body>
</html>
