<!DOCTYPE html>

<head>
</head>

<body>
    <script src="assets/js/utils.js"></script>
</body>

</html>

<?php

function GoSuccessPage() {

    $url = "./Success.html";
    $url = json_encode($url);
    echo '<script type="text/javascript"> redirectPost(' . $url . '); </script>';

}

    function createCSV($cfilename)
    {  
        if (file_exists($cfilename)) {
            return true;
        }

        $keys = [
            "side",
            "name",
            "firm-name",
            "firm-hq",
            "firm-aum-band",
            "firm-employee-size",
            "firm-regions",
            "firm-staragy",
            "firm-research-budget",
            "q_01",
            "q_02",
            "q_03",
            "q_04",
            "q_05",
            "q_06",
            "q_07",
            "feedback"
        ];

        $fp = fopen($cfilename, 'w');
        fputcsv($fp, $keys);
        fclose($fp);

        return true;
    }

    function jsonToCSV($data, $cfilename)
    {
        $fp = fopen($cfilename, 'a');
        fputcsv($fp, $data);
        fclose($fp);
    }

    $arr = [];
    $valid = false;
    if (isset($_POST) && isset($_POST["form_main_about"])) {
        $data = json_decode($_POST["form_main_about"], true);
        $arr = array_merge($arr, array_values($data));
        foreach ($data as &$value) {
        }
    }

    if (isset($_POST) && isset($_POST["form_main_answers"])) {
        $data = json_decode($_POST["form_main_answers"], true);
        $arr = array_merge($arr, array_values($data));
        foreach ($data as &$value) {
        }
    }

    if (isset($_POST) && isset($_POST["form_main_feedback"])) {
        $data = json_decode($_POST["form_main_feedback"], true);
        $arr = array_merge($arr, array_values($data));
        foreach ($data as &$value) {
        }
    }

    $valid = true;
    if ($valid) {
        $filepath = __DIR__ . "/data.csv";
        createCSV($filepath);
        jsonToCSV($arr, $filepath);
        GoSuccessPage();
    }


?>