<!DOCTYPE html>

<head>
</head>

<body>
    <script src="assets/js/utils.js"></script>
</body>

</html>

<?php

function GoSuccessPage() {

    $url = "./further-reading.html";
    $url = json_encode($url);
    echo '<script type="text/javascript"> redirectPost(' . $url . '); </script>';

}

    function createTxt($cfilename)
    {  
        if (file_exists($cfilename)) {
            return true;
        }

        $fp = fopen($cfilename, 'w');
        fclose($fp);

        return true;
    }

    function appendTxt($data, $cfilename)
    {
        $fp = fopen($cfilename, 'a');
        fwrite($fp, $data . "\n");
        fclose($fp);
    }


    if (isset($_POST) && isset($_POST["opt-in"])) {
        $filepath = __DIR__ . "/opt.txt";
        createTxt($filepath);
        appendTxt($_POST["your-email"], $filepath);
        GoSuccessPage();
    }


?>