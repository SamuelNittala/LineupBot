const defaultHelper =
"```\nType -{agent-name} for details\n\n\
Example: -sova```"

const agentFail =
"```\nAgent lineups not available yet\n```"

const viperString = 
"```\nAbilities: snakebite(sb), poison cloud(pc) \n\n\
Usage: -viper *ability* *side* *map* *area* \n\n\
Example: -viper snakebite ct haven asite\n\n\
Shortcut: -viper sb ct haven asite```"

const sovaString =
"```\nAbilites : recon,shock\n\n\
Usage: -sova *ability* *side* *map* *area* \n\n\
Example : -sova recon att ascent ct ```" 

const helperStrings = {
    "default":defaultHelper,
    "agentFail": agentFail,
    "viper": viperString,
    "sova": sovaString
}
module.exports = helperStrings 