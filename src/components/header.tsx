import logoPrefeituraJaboatao from '../assets/prefeitura-jaboatao.svg'
import userProfile from '../assets/UserCircle.svg'

export function Header(){
    return(
        <div className='flex justify-between'>
            <img className='' src={logoPrefeituraJaboatao} />

            <nav className=''>
                <img src={userProfile} alt="" />
            </nav>
        </div>

    )
}