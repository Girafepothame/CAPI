
<div>
    <fieldset id="fieldset_t">
        <legend>Editer Backlog</legend>
        <div>
            <label for="tsk">Tâche :</label>
            <input type="text" name="task" id="tsk" placeholder="Tâche à ajouter"></input>
            <button id="sendTask"> > </button>

            <label for="bcklog">Fichier de Backlog</label>
            <input type="file" name="backlog" id="bcklog" accept="application/JSON">
        </div>
        <table id="task_tab">
            <tr id="t_headers">
                <th>Tâche</th>
                <th></th>
            </tr>
        </table>
    </fieldset>
    <button id="send">ENVOYER</button>
    <form action="./?page=room" method="post" style="display:none">
        <fieldset id="taskform">

        </fieldset>
        <input type="submit" value="Envoyer" id="bl_send">
    </form>
</div>