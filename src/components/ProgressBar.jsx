import '../css/ProgressBar.css'

export function ProgressBar(props) {
    const progressStyle = {
        width: props.percent + '%'
    }

    return (
        <div className='progress-panel'>
            <div className='bar' style={progressStyle}></div>
        </div>
    )
}