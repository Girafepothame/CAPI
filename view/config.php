
<div>
    <div id="fieldset_t">
        <div>
            <div class="input-container">
                <input type="text" name="task" id="tsk" placeholder="Tâche à ajouter"></input>
                <button id="sendTask">►</button>
            </div>
            
            <label class="custom-file-upload" for="bcklog">
                Charger Backlog
                <input type="file" name="backlog" id="bcklog" accept="application/JSON">
            </label>
        </div>
        <div id="tab-cont">
            <table id="task_tab">
                <tr id="t_headers">
                    <th>Tâche</th>
                    <th></th>
                </tr>
            </table>
        </div>
    </div>
    <div id="duck">
        <img src="ressources/images/duck.gif" alt="Duck Me !">
    </div>
    <button id="send">ENVOYER</button>
    <form action="./?page=room" method="post" style="display:none">
        <fieldset id="taskform">
            <input type="text" name="curr_t" id="ct" value="0">
            <input type="text" name="curr_p" id="cp" value="0">
        </fieldset>
        <input type="submit" value="Envoyer" id="bl_send">
    </form>
</div>