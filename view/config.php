
<div>
    <fieldset id="fieldset_t">
        <legend>Editer Backlog</legend>
        <div>
            <label for="tsk">Tâche :</label>
            <input type="text" name="task" id="tsk" placeholder="Tâche à ajouter"></input>
            <button id="sendTask"> > </button>

            <label for="bcklog">Fichier de Backlog</label>
            <input type="file" name="backlog" id="bcklog" accept="application/JSON" onchange="readJSON(event)">
        </div>
        <table id="task_tab">
            <tr>
                <th>Tâche</th>
                <th></th>
            </tr>
        </table>
    </fieldset>
</div>