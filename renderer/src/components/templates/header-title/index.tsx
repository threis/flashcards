interface HeaderTitleProps {
    title: string
}
export function HeaderTitle({ title }: HeaderTitleProps) {
	return (
		<title>{title}</title>
	)
}