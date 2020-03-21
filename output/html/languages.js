import React, { Component } from 'react';
import { Tabular, Caller } from '../utils';
import { __, _x, _n, sprintf } from '@wordpress/i18n';

class Languages extends Component {

	render() {
		const { data } = this.props;

		return (
			<Tabular id={this.props.id}>
				<thead>
					<tr>
						<th scope="col">
							{__( 'Text Domain', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Type', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Caller', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Translation File', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Size', 'query-monitor' )}
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(data.languages).map(key =>
						<React.Fragment key={key}>
							{data.languages[key].map(lang =>
								<tr key={lang.domain + lang.file}>
									{ lang.handle ? (
										<td className="qm-ltr">{lang.domain} ({lang.handle})</td>
									) : (
										<td className="qm-ltr">{lang.domain}</td>
									)}
									<td>{lang.type}</td>
									<Caller trace={[lang.caller]} />
									{ lang.file ? (
										<td className="qm-ltr">{lang.file}</td>
									) : (
										<td className="qm-nowrap"><em>{__( 'None', 'query-monitor' )}</em></td>
									)}
									{ lang.found ? (
										<td className="qm-nowrap">{lang.found}</td>
									) : (
										<td className="qm-nowrap">{__( 'Not Found', 'query-monitor' )}</td>
									)}
								</tr>
							)}
						</React.Fragment>
					)}
				</tbody>
			</Tabular>
		)
	}

}

export default Languages;
