
<!DOCTYPE html>
<html lang="en">
    <head>
        @include('template-admin.head')
        <title>Laravel & Vue JS 3</title>
    </head>
    <body class="hold-transition sidebar-mini">
        <!-- wrapper -->
        <div class="wrapper">

            <!-- Navbar -->
            @include('template-admin.navbar')
            <!-- /.navbar -->

            <!-- Main Sidebar Container -->
            @include('template-admin.left_sidebar')
            <!-- /.Main Sidebar Container -->

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper" id="app">
                <example-component></example-component>
            </div>
            <!-- /.content-wrapper -->

            <!-- Main Footer -->
            @include('template-admin.footer')
            <!-- /.Main Footer -->
        </div>
        <!-- ./wrapper -->

        <!-- Script Vue Js -->
        @include('template-admin.script')
        <!-- ./Script Vue Js -->
    </body>
</html>
