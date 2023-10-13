<!DOCTYPE html>

<head>
</head>

<body>
    <script src="assets/js/utils.js"></script>
</body>

</html>

<?php



    if (isset($_POST)) {
        $url = "";

        if (isset($_POST["a_radio_01"])) {
            $url = "./buyside/";
        }
        else if (isset($_POST["b_radio_01"])) {
            $url = "./sellside/";
        }
        else if (isset($_POST["c_radio_01"])) {
            $url = "./other/";
        }
        else {
            echo '<script type="text/javascript"> redirectPost(' . json_encode("./index.html") . '); </script>';
            return;
        }


        if ($url != "") {
            $url = json_encode($url);
            echo '<script type="text/javascript"> redirectPost(' . $url . '); </script>';
        }
    }
    else {
        '<script type="text/javascript"> redirectPost(' . "./index.html" . '); </script>';
    }


?>