import React from 'react'

type Props = {}

const BaseLayout = (props: Props) => {
    return (
        <div>
            <header>
                Header
            </header>

            <main>
                {/* <Outlet></Outlet> */}
            </main>

            <footer>
                Footer
            </footer>
        </div>
    )
}

export default BaseLayout