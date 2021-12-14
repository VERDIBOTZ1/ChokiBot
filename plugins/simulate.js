let handler = async (m, { itsu, args: [event], text }) => {
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? itsu.parseMention(mentions) : []
    let participants = who.length ? who : [m.sender]
    let action = false
    m.reply(`Simulating ${event}...`)
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            action = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            action = 'remove'
            break
        case 'promote':
            action = 'promote'
            break
        case 'demote':
            action = 'demote'
            break
        case 'delete':
            deleted = m
            break
        default: throw `List Event: welcome, bye, delete, promote, demote`
    }
    if (action) return itsu.onParticipantsUpdate({
        jid: m.chat,
        participants,
        action
    })
    return itsu.onDelete(m)
}
handler.help = ['simulate <event> [@mention]']
handler.tags = ['owner', 'group']

handler.command = /^simulate$/i
module.exports = handler

