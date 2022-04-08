import Link from 'next/link'
import { BsPlusLg } from 'react-icons/bs'
import { HiOutlineHome, HiOutlineViewGrid } from 'react-icons/hi'
import { VscDebugStart } from 'react-icons/vsc'
import { Logo, MenuItem, Options, Sidebar } from './styles'



export function Menu() {
	return (
		<Sidebar>
			<Logo />
			<Options>
				<MenuItem>
					<Link href="/">
						<a>
							<HiOutlineHome />
							<span>Home</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link href="/add">
						<a>
							<BsPlusLg />
							<span>Adicionar</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link href="/view">
						<a>
							<HiOutlineViewGrid />
							<span>Visualizar</span>
						</a>
					</Link>
				</MenuItem>
				<MenuItem>
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