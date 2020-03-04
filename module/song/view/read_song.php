<div id="contenido">
    <h1>Informacion del Usuario</h1>
    <p>
    <table border='2'>
        <tr>
            <td>ID Song: </td>
            <td>
                <?php
                    echo $user['id_song'];
                ?>
            </td>
        </tr>
    
        <tr>
            <td>Name: </td>
            <td>
                <?php
                    echo $user['song_name'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Singer: </td>
            <td>
                <?php
                    echo $user['singer'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Album: </td>
            <td>
                <?php
                    echo $user['album'];
                ?>
            </td>
        </tr>

        <tr>
            <td>Genre: </td>
            <td>
                <?php
                    echo $user['genre'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Relase Date: </td>
            <td>
                <?php
                    echo $user['relase_date'];
                ?>
            </td>
        </tr>
        
    </table>
    </p>
    <p></p> <button type="button"><a href="index.php?page=controller_song&op=update&id=<?php echo $user['id_song'] ?>"> Edit</a></button> 
    <p><a href="index.php?page=controller_song&op=list">Volver</a></p>
</div>