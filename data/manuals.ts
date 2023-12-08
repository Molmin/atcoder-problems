function numberArray(from: number, to: number) {
    const arr = []
    for (let i = from; i <= to; i++)arr.push(i)
    return arr
}

function abbr(str: string) {
    return str.split(',').map((s) => s.split('=') as [string, string])
}

function buildManuals(data_prefix: string, real_prefix: string, suffix: [string, string][]) {
    return suffix.map(([d, r]) => [`${data_prefix}${d}`, `${real_prefix}${r}`])
}

function buildUnionContest(abc: string, arc: string, dir: string = `ARC${arc}`) {
    return [
        [`${dir}/A`, `abc${abc}_a`],
        [`${dir}/B`, `abc${abc}_b`],
        [`${dir}/C`, `arc${arc}_a`],
        [`${dir}/D`, `arc${arc}_b`],
        [`${dir}/E`, `arc${arc}_c`],
        [`${dir}/F`, `arc${arc}_d`],
    ]
}

function buildSingleContest(id: string, tot: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].slice(0, tot).map((x) => `${id}${x}`)
}

function base(str: string, ex = false) {
    const contest = str.slice(0, -1), pid = str.slice(6)
    return [
        `${contest}/${ex && pid === 'H' ? 'Ex' : pid}`,
        `${contest.toLowerCase()}_${pid.toLowerCase()}`,
    ]
}

export default [
    ...buildManuals('2019exa/', 'exawizards2019_', abbr('A=a,C=c,F=f')),
    ...buildManuals('2020_hitachi/', 'hitachi2020_', abbr('C=c,E=e')),
    ...buildManuals('CodeFestival2016EliminationTournament/', 'asaporo_', abbr('1A=c,1B=f,2A=e,2B=a,3A=d,3B=b')),
    ...buildManuals('CodeFestival2017Final/', 'cf17_final_', abbr('A=a,B=b,C=c,D=d,E=e,F=f,G=g,H=h,I=i,J=j')),
    ...buildManuals('CodeFestival2017QualB/', 'code_festival_2017_qualb_', abbr('A=a,B=b,C=c')),
    ...buildManuals('caddi2018/', 'caddi2018', abbr('A=b_a,B=b_b,C=_a,D=_b,E=_c,F=_d')),
    ...buildManuals('jsc2019/', 'jsc2019_qual_', abbr('A=a,B=b,C=c,E=e')),
    ...buildManuals('msolutions2019/', 'm_solutions2019_', abbr('E=e,F=f')),
    ...buildManuals('nomura2020/', 'nomura2020_', abbr('B=b,E=e,F=f')),
    ...buildManuals('tenka1_201', 'tenka1_201', abbr('7/C=7_c,8/B=8_b,9/A=9_a')),
    ...buildManuals('tokiomarine2020/', 'tokiomarine2020_', abbr('A=a,B=b,C=c,D=d,E=e,F=f')),
    ...buildManuals('CodeFestival2016Relay/', 'relay_', abbr('A=a,B=b,C=c,D=d,E=e,F=f,G=g,H=h,I=i,J=j')),
    ...buildManuals('s8pc_4/s8pc-4/', 's8pc_4_', abbr('A=a,B=b,C=c,D=d,E=e,F=f,G=g,H=h')),
    ['dwacon5th-prelims/D', 'dwacon5th_prelims_d'],
    ['s8pc_3/H', 's8pc_3_h'],
    ...[
        ...[109, 110, ...numberArray(112, 125)]
            .map((x) => buildSingleContest(`ABC${x}`, 4)).flat(),
        ...numberArray(126, 211).map((x) => buildSingleContest(`ABC${x}`, 6)).flat(),
        ...numberArray(212, 232).map((x) => buildSingleContest(`ABC${x}`, 8)).flat(),
        ...numberArray(1, 8).map((x) => buildSingleContest(`AGC00${x}`, 6)).flat(),
        ...buildSingleContest(`AGC009`, 5),
        ...numberArray(10, 41).map((x) => buildSingleContest(`AGC0${x}`, 6)).flat(),
        ...numberArray(43, 49).map((x) => buildSingleContest(`AGC0${x}`, 6)).flat(),
        ...numberArray(52, 62).map((x) => buildSingleContest(`AGC0${x}`, 6)).flat(),
        ...numberArray(104, 161).map((x) => buildSingleContest(`ARC${x}`, 6)).flat(),
        'APC001A',
    ].map((x) => base(x)),
    ...numberArray(233, 305)
        .map((x) => buildSingleContest(`ABC${x}`, 8)).flat()
        .map((x) => base(x, true)),
    ...[
        '042, 058, ARC058_ABC042', '043, 059, ARC059_ABC043',
        '044, 060', '045, 061', '048, 064', '049, 065', '053, 068',
        '055, 069', '056, 070', '059, 072', '062, 074', '063, 075', '065, 076', '067, 078',
        '069, 080', '071, 081', '072, 082', '074, 083', '077, 084',
        '081, 086', '082, 087', '083, 088', '086, 089', '090, 091',
        '092, 093', '093, 094', '094, 095', '095, 096', '097, 097',
        '098, 098', '101, 099', '102, 100', '111, 103',
        // @ts-ignore
    ].map((x) => buildUnionContest(...x.split(', '))).flat(),
    ['ARC102/E', 'arc102_c'],
    ['AGC028/F2', 'agc028_f2'],
]