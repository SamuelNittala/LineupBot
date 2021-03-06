const defaultHelper =
"```\nType -{agent-name} for details\n\n\
Example: -sova```"

const agentFail =
"```\nAgent lineups not available yet\n```"

const viperString =
"```\nAbilities: snakebite(sb), poison cloud(pc) \n\n\
Side: att(a), def(d)\n\n\
Usage: -viper *ability* *side* *map* *area* \n\n\
Supports poison cloud oneways, post plant snakebites\n\n\
Example: -viper snakebite(sb) haven asite\n\n\
Shortcut: -viper sb pp haven asite```"

const sovaString =
"```\nAbilites : recon(r) ,shock(s)\n\n\
Side: att(a), def(d)\n\n\
Usage: -sova *ability* *side* *map* *area* \n\n\
area = where you want the arrow to land\n\n\
Example : -sova recon att ascent bsite\n\n\
shorthand: -sova r a ascent bsite```"

const helperStrings = {
    "default":defaultHelper,
    "agentFail": agentFail,
    "viper": viperString,
    "sova": sovaString
}
module.exports = helperStrings
