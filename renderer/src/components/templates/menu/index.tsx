import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsPlusLg } from 'react-icons/bs'
import { HiOutlineHome, HiOutlineViewGrid } from 'react-icons/hi'
import { VscDebugStart } from 'react-icons/vsc'
import { Logo, Text, MenuItem, Options, Sidebar } from './styles'

export function Menu() {

	const router = useRouter()

	return (
		<Sidebar>
			<Logo>
				<img src="/static/logo.png" alt="Flashcards logo" width="200" height="200" />
				<Text>Flashcards</Text>
			</Logo>
			<Options>
				<MenuItem activated={router.asPath === '/'}>
					<Link href="/">
						<a>
							<HiOutlineHome />
							<span>Home</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem activated={router.asPath === '/add'}>
					<Link href="/add">
						<a>
							<BsPlusLg />
							<span>Adicionar</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem activated={router.asPath === '/view'}>
					<Link href="/view">
						<a>
							<HiOutlineViewGrid />
							<span>Visualizar</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem activated={router.asPath === '/start'}>
					<Link href="/start">
						<a>
							<VscDebugStart />
							<span>Iniciar</span>
						</a>
					</Link>
				</MenuItem>
			</Options>
		</Sidebar>
	)
}