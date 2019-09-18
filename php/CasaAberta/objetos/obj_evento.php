<?php
    header('Access-Control-Allow-Origin: *');
    //header("Access-Control-Allow-Headers: Content-Type");
    //header('Content-Type: application/json');

    require_once("./obj_conexao_bd.php");

    $conexao = AbreConexaoBD();

    $sql = "SELECT nome, descricao, DATE_FORMAT(data_evento, '%d/%m/%Y %Hh%i') as data_evento  FROM tb_evento";
    
    $resultado = mysqli_query($conexao, $sql);

    //echo "[";

    $eventos = [];

    while($linha = mysqli_fetch_assoc($resultado)) {
        $evento = json_decode('{ "nome": "' . $linha["nome"] . '", "descricao": "' . $linha["descricao"] . '", "data_evento": "' . $linha["data_evento"] . '"}');
        array_push($eventos, $evento);
        //echo '{ "nome": "' . $linha["nome"] . '", "descricao": "' . $linha["descricao"] . '"},';
    }

    //echo "]";

    echo json_encode($eventos);

    mysqli_close($conexao);

    /*
        [
            { "nome": "Git", "descricao": "Git Hub no mercado" },
            { "nome": "Git 2", "descricao": "Git Hub no mercado 2" },
            { "nome": "Git 3", "descricao": "Git Hub no mercado 3" }
        ]
    */
?>