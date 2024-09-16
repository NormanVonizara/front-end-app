import {Container} from "@/src/ui/components/container/container"
import {Logo} from "@/src/ui/design-system/logo/logo";
import {Typography} from "@/src/ui/design-system/typography/typography";
import {Button} from "@/src/ui/design-system/button/button";
import {ActiveLink} from "@/src/ui/components/navigation/active-link";
import Link from "next/link";

interface Props {
}

export const Navigation = ({}: Props) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small"/>
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Coders Monkeys
                            </div>
                            <Typography
                                variant="caption4"
                                tag="span"
                                theme="gray"
                            >
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Trouve de l'inspiration & reçois des feedbacks !
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography
                        variant="caption3"
                        tag="div"
                        className="flex items-center gap-7"
                    >
                        <ActiveLink href="/design-system">Design System</ActiveLink>
                        <ActiveLink href="/projets">Projets</ActiveLink>
                        <ActiveLink href="/formations">Formations</ActiveLink>
                        <ActiveLink href="/contact">Contact</ActiveLink>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button
                            baseUrl="/connexion"
                            size="small"
                        >
                            Connexion
                        </Button>
                        <Button
                            size="small"
                            variant="secondary"
                            baseUrl="/inscription"
                        >
                            Rejoindre
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
