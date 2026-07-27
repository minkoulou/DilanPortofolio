import  {MessageCircle} from 'lucide-react'

export function WhatsappButton({numero}){
    const lien =`https://wa.me/${numero}`
 return(
    <a href={lien} 
    target='_blank' 
    rel='noopener noreferrer'
    className='animate-bounce fixed bottom-4 right-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50'
    aria-label='Contacter mon whatsapp'>
       <MessageCircle size={28}/>
    </a>
 )
}