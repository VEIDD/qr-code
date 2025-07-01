import {Routes, Route,} from 'react-router-dom'
import {QrCodeGenerator} from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { Navigation } from './components/Navigation/Navigation'
import { HistoryGenerate  } from './components/HistoryGenerate/HistoryGenerate';
import { HistoryScan  } from './components/HistoryScan/HistoryScan';
export const Layout = () => {
	return (
		<div>
			<Navigation/>
			<Routes>
				<Route path='/generate' element={<QrCodeGenerator/>}/>
				<Route path='/scan' element={<QrCodeScanner/>}/>
				<Route path='/scan_history' element={<HistoryScan/>}/>
				<Route path='/generate_history' element={<HistoryGenerate/>}/>
			</Routes>
			{/* <QrCodeGenerator/>
			<QrCodeScanner/> */}
		</div>
	);
}

