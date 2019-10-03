## ECL instruction table
Note: this is based on information from [here](https://thwiki.cc/%E8%84%9A%E6%9C%AC%E5%AF%B9%E7%85%A7%E8%A1%A8/ECL).  
Note2: this is very **very** incomplete as of now.  
  
[html]
Select game version:
<select class='ecl-table-game-select'>
    <option value="13">13 (Ten Desires)</option>
    <option value="14">14 (Double Dealing Character)</option>
    <option value="14.3">14.3 (Impossible Spell Card)</option>
    <option value="15">15 (Legacy of Lunatic Kingdom)</option>
    <option value="16">16 (Hidden Star in Four Seasons)</option>
    <option value="16.5">16.5 (Violent Disease)</option>
    <option value="17">17 (Wily Beast and Weakest Creature)</option>
</select>

Eclmap for instruction names:<br><br>
<input type="radio" id="radio-eclmap-default" name="eclmap-radio" value="1" checked>
<label for="radio-eclmap-default">Use default</label>

<input type="radio" id="radio-eclmap-custom" name="eclmap-radio" value="0">
<label for="radio-eclmap-custom"><input type="file" id="eclmap-file"></label>

<button class="ecl-table-btt">Get table</button>
<div class='ecl-table-wrapper'></div>
[/html]

[script]
onContentLoad(function() {
    const select = document.querySelector(".ecl-table-game-select");
    const target = document.querySelector(".ecl-table-wrapper");
    const input = document.querySelector("#eclmap-file");
    document.querySelector(".ecl-table-btt")
        .addEventListener("click", async () => {
            let game = parseFloat(select.value);
            let radios = document.getElementsByName("eclmap-radio");
            let val;
            for (let i=0; i<radios.length; i++)
                if (radios[i].checked)
                    val = radios[i].value;
            if (val == "1") {
                await loadEclmap(null, "?"+game, game);
            } else {
                if (input.files.length != 0) {
                    const file = input.files[0];
                    await loadEclmap(file, file.name, game);
                } else return alert("Please upload an eclmap first.");
            }
            target.innerHTML = generateOpcodeTable(game);
        });
});
[/script]