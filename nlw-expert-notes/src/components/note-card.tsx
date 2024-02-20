export function NoteCard() {
    return (
        <button 
        className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-line-400">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem eligendi at asperiores esse sed, excepturi minus inventore exercitationem earum aut! Ad illo dolore architecto fugiat, amet placeat modi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit magni, minima nisi optio totam! Voluptatem provident perferendis adipisci quasi, incidunt qui, temporibus quis minima voluptate velit minus, ad non?velit..</p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}