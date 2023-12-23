import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getPokemonNum } from '../lib/pokemonAPI'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //console.log("middleware ran: "+request.url + " : " + getPokemonNum(request.url, 1))
  var numString: string = getPokemonNum(request.url, 1)
  if(numString == "_next") console.log("_next found")
  else if(Number(numString) <= 151) console.log("You are on page: "+numString)
  else if(Number(numString) > 151) console.log("too far up") //return redirect with params?
  else console.log("unknown found: "+numString)
  //return NextResponse.json({success: "yayayyy"})
}
 
// See "Matching Paths" below to learn more
export const config = {
  //matcher: ["/funny"]
  matcher: ["/:path*"]
}