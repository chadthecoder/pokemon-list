import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getPokemonNum } from './lib/pokemonAPI'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //console.log("middleware ran: "+request.url + " : " + getPokemonNum(request.url, 1))
  var numString: string = getPokemonNum(request.url, 1)

  if(numString == "") console.log("home?")
  else if(numString == "_next") console.log("_next found")
  else if(numString == "favicon.ico") console.log("favicon.ico found")
  else if(numString == "0") return NextResponse.redirect(new URL('/', request.url))
  else if(Number(numString) <= 151 && Number(numString) >= 1) console.log("You are on page: "+numString)
  else if(Number(numString) > 151) return NextResponse.redirect(new URL('/', request.url)) //console.log("too far up") //return redirect with params?
  else return NextResponse.redirect(new URL('/', request.url)) //console.log("unknown found: "+numString)
  //return NextResponse.json({success: "yayayyy"})
}
 
// See "Matching Paths" below to learn more
export const config = {
  //matcher: ["/funny"]
  matcher: ["/:path*"]
}