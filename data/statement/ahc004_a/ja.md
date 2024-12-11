## ストーリー

人間の遺伝情報は二重らせん構造のDNAに記録されており、`A`, `G`, `C`, `T` の4種類の文字からなる非常に長い文字列で表現される。
最近、隕石の中から宇宙人の細胞が見つかった。
調査の結果、この宇宙人の遺伝情報は[トーラス](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%BC%E3%83%A9%E3%82%B9)状の物質に記録されており、`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H` の8種類の文字からなる$N\times N$の行列として表現されることが分かった。
既存の装置では、この行列を直接読み取ることは出来なかったが、縦方向、もしくは横方向に連続する一次元の部分列を沢山読み取ることに成功した。
この部分列の情報を元に行列を推定してほしい。

## 問題文

一次元の列 $b=(b_0, \ldots, b_{k-1})$ が行列 $a=(a_{i,j})_{0\leq i,j\leq N-1}$ の**部分列**であるとは、ある $(i,j)$が存在し、以下のどちらか一つ以上を満たすことと定義する。

- 全ての $p=0,\ldots,k-1$ で $b_p=a_{i,(j+p)\bmod N}$ (横方向に一致)
- 全ての $p=0,\ldots,k-1$ で $b_p=a_{(i+p)\bmod N,j}$ (縦方向に一致)

インデックスが $N$ 以上となった場合に$N$で割った余りを取っていることに注意(つまり、$a$ は左端と右端、上端と下端がつながっている)。

`A`, `B`, $\ldots$, `H` からなる $M$ 個の文字列 $s_1, \ldots, s_M$ が与えられるので、これらのうち出来るだけ多くを部分列として含むような
`A`, `B`, $\ldots$, `H` もしくは `.` からなる $N\times N$ の行列を求めよ。
`.` は空白を意味する。

## 得点

$s_i$ が出力の部分列であるような $i$ の個数を $c$ ($\leq M$)、出力に含まれる `.` の個数を $d$ ($\leq N^2$) としたとき、以下の得点が得られる。

- $c&lt;M$ の場合、$\mathrm{round}(10^8\times \frac{c}{M})$
- $c=M$ の場合、$\mathrm{round}(10^8\times \frac{2 N^2}{2 N^2-d})$

不正な出力($N\times N$ 行列でない、`A`, `B`, $\ldots$, `H`, `.` 以外の文字を含む)がされた場合、`WA`と判定される。
テストケースは全部で100個あり、各テストケースの得点の合計が提出の得点となる。
1つ以上のテストケースで`AC`以外の判定がされた場合、提出の得点は0点となる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 
同じ得点を複数の参加者が得た場合、その得点を獲得した提出の早い方が上位となる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $s_1$
> 
> $\vdots$
> 
> $s_M$

- $N$ は全テストケースを通して20で固定
- $M$ は400以上800以下の整数値
- 各 $s_i$ は `A`, `B`, $\ldots$, `H` の8種類の文字からなる長さ2以上12以下の文字列

## 出力

`A`, `B`, $\ldots$, `H`, `.` からなる長さ $N$ の文字列を $N$ 行出力せよ。

## 入力生成方法

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ で表す。

まずはじめに、$N\times N$の行列 $a=(a_{i,j})_{0\leq i,j\leq N-1}$ を、各要素毎に独立に一様ランダムに `A`, `B`, $\ldots$, `H` から選択することで生成する。
次に、平均長を決めるパラメータ $L=\mathrm{rand}(4, 10)$ と文字列の個数 $M=\mathrm{rand}(400, 800)$ を生成し、以下の処理を独立に $M$ 回繰り返すことで $M$ 個の文字列 $s_1,\ldots,s_M$ を生成する。

文字列の始点を表す2つの整数 $i=\mathrm{rand}(0, N-1)$ と $j=\mathrm{rand}(0, N-1)$、向きを表す整数 $d=\mathrm{rand}(0,1)$、長さを表す整数 $k=\mathrm{rand}(L-2, L+2)$ を生成する。

- $d=0$ の場合、横方向の部分列 $(a_{i,j},a_{i,(j+1)\bmod N},\ldots,a_{i,(j+k-1)\bmod N})$ を採用する。
- $d=1$ の場合、縦方向の部分列 $(a_{i,j},a_{(i+1)\bmod N,j},\ldots,a_{(i+k-1)\bmod N,j})$ を採用する。

## ツール

- [入力データ](https://img.atcoder.jp/ahc004/a45fa3f18ab177158bf5961b12872f93.zip): サンプル入力(seed 0)を含む、ローカルテスト用の100個の入力データ(seed 0-99)です。これらの入力は実際のテストケースとは異なります。
- [Web版ビジュアライザ](https://img.atcoder.jp/ahc004/a42b6f0655821d8b384b31377108e5512.html)
- [入力ジェネレータ・ビジュアライザ](https://img.atcoder.jp/ahc004/222362f13a30b1342bf79d0041bd4d39.zip): より多くの入力を生成するための入力ジェネレータとローカル実行用のビジュアライザです。使用するには、[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。

```input1
20 742
AFHCGEH
HDBCHG
EAHC
ABHDG
DGAHHG
GAHHGB
DHBBEB
GEAD
GCEBD
GHGFGA
BHC
BAGCCB
CAF
HBGGC
AHEBA
FBGEB
GHGFGA
CFA
FEHB
GDCEFBE
BACEGGG
CBA
GEHDC
CFACHAF
ACGBA
CEE
AADDCCH
GGDHHHC
EDAEE
ECA
EBEED
BGCAH
AEAH
GFCGEH
CGAGHE
HAGEA
FEA
CEDHAG
EEH
AGHECFC
EFGDDA
DCCHGD
ADDHB
FCGF
BAGE
CFA
HBCE
CGFG
CEFECCB
BADEBDD
AGACG
DCAGGCE
HEHHDB
DDHDB
HCFFAB
HEBDADD
DGFCGFG
AFFFBCG
FCEAC
EGGG
DADDC
EDH
BHCAACH
GCE
HAHGB
BFFDAHE
CFAEAHC
ACCHE
BFH
CHDC
CFHDCB
DED
GACG
HECFCFE
FEAFEH
CADFGE
GCHD
BEEHEG
GDH
FBEHHB
FHAG
BGCAHDC
DCCCE
GDH
CCBA
GEH
EDEHH
HHDBCH
HGB
EHD
CFFABFC
DGG
DBHEC
GEAGCFE
CCGAGHE
DHAGAC
CCCGHH
CBBFFDA
EFA
DFGD
HDCAADD
HDCFC
GHECFCF
CCDDE
AFC
CCE
DAHD
FAGFCB
FEC
DHAGG
EGEFAG
CGDD
AACCHE
FFC
HED
FBCFFHD
BAGE
HEBD
GBBE
DHBCEFG
CAAAEAA
DBFG
GHCC
DEGGE
BCGCHD
EEA
BEE
ECG
DHHHCCA
CHD
GCDECG
FFCCFAE
HGH
EGFB
CFFEGE
GEADHAG
GBGDCHD
EFGC
BEHHB
DBECC
DCFF
CFE
DCADDHG
ADHAGGB
ABD
DAEEGF
DEG
CHFFHGH
CGAGH
FCCB
FHGHD
EBGCAHD
CFHDC
FEHB
FHC
CHGDHBB
EDBECCD
DCF
GBADEB
AAHF
CEFECC
DCGA
HAFHFE
HDCAAD
GDH
CEF
DCBDFDE
GDHHHCC
FCCC
GAGHE
CHFEE
GDD
HEDEHHD
BDD
HCAHC
EEH
GBG
HEDEG
GAFAHB
BBFHB
DGF
BCHGFCC
GCCFACH
FAGAE
DBFGDC
GHDD
GGE
FFFBCG
EGGGE
CCCEE
GABCHED
EDHA
EFAGA
FHDCAD
GGGD
DHBGGCC
DHAGACG
GECCH
FABFCD
GCC
CCE
EADHAG
EEHEG
FDAD
DFH
AFC
DCCCE
CGE
EBDCCC
GBDGEAB
CAHCBH
CGCHD
FGAEDDB
FAGAFAH
HEEFBDC
HAGGBAH
DCCEFEC
ADH
CHEDE
DAFHCG
BCFA
GDCBDF
HDC
FFGEH
EAEFHC
DDCHCA
GHGD
HGGGD
EGFCF
CADF
GGCCGA
CGDDAA
DDAACC
DDHDGG
GDHEDA
HEBDAD
DCGHG
EFHG
BHDGAA
ADDCCHG
FBGEBG
GFEGHE
CFAA
CFDE
FCBBG
BDCC
GBBEAFD
GDFCA
GHEDG
BDGEABH
ADCFGAE
HHGBCF
AAHAFHF
EDA
CHGDH
DDDFHEH
HDCA
CDCF
FCFH
CDGAH
CHEDEHH
CCBHEBD
FBC
HHDBC
CEE
FGCFA
CEBDCCC
BEAFDEF
HHDB
AEGECE
HHCCA
HDDHBCE
GEH
HBADFFB
BECC
GCAHDCA
DBAEEHD
DGAACA
EEH
EAFEHDC
FFHGHDD
BFEHB
AHDCAA
BADFF
CHCEDH
CGHAHG
CCCGHH
AEEGFED
DFGDDEF
GDDAAC
GEC
CDAC
GBDGEAB
HGCBFEH
CFA
CEBE
BHDGA
FHEHHD
BFHB
AGCDE
AFCDEDD
GGAA
FACAA
EDA
CCG
EHFBCF
HGBBEA
AGFCB
EAADBA
CFAEAH
AAHFCEA
EEG
DGBGD
GDHHH
HHCCAC
EAGDDHD
ECCHFE
GDBC
DCC
EFHDFEA
BBFF
FGBGF
HDBBEFD
FCC
EBGBG
ADDH
EBDCCCE
EGG
EDH
DEFHGB
DHCDE
DCH
HGBGE
BAAHFC
DGGAAF
DGFC
AEFHCCF
EAFDE
HFBCF
DEEBEAD
FDE
CCD
FCGFGB
EGGE
EDE
GCDECGD
EBF
EGGGEB
HEDAE
CEBE
GDHBB
DABDEA
HGCBFE
HDCADD
DEGFBAG
DFBEEH
GBDGEA
GCEGGGE
ADHAGG
GDDADA
FGBG
HBCE
AGFCEEA
DCF
BEHHBG
DFGEA
DCHDABD
ADCFG
BEHHB
DHBGGC
ADFGEAD
DDH
BEBGC
BFEH
GHH
FFBCG
BDDB
HDCADD
AHF
GGD
FFDAHE
EGBEEHE
BBGDEE
EFCF
CGFGB
GCFE
CEEF
HFBG
CCGA
FFDAHEE
GBGE
GBGDCHD
FGDC
GCEBDC
FGBGFCE
EFBDCG
AACC
CBHCAAC
GDDAD
AAHA
GAFF
CBAAHFC
GAF
GAFAHBE
CCGAG
DHA
CEA
BCEFGCF
CEDCAGG
HFB
AGHGCB
AADD
BCGC
EDCA
GCF
BEADECD
AHDBEA
FBCG
GHCCE
EBDC
DCAD
AGCD
FHFEDB
FCE
FEAADDH
BGC
GGEBD
EABGF
AGE
CGDBC
FEAFEHD
CGH
DABDEA
CAHCB
EDFGDDE
DAA
EAGAFF
DAH
AFAHBE
DCBA
DCB
BGC
FFHDC
FAGFCB
ECFCF
CFAAFFF
HGHDDCH
BGCB
AHDB
BACE
FCCD
ACEDDHD
CEF
BFEH
EGBFEA
GEHFBC
GBDGA
HGCEG
DBCFHA
ADE
CGHG
GDHHHCC
GFG
DHEDAE
ECEEA
BHCHCE
HAF
FCEE
CCBAG
CEGGGE
DDCHCAH
EFHC
AED
FGBGFCE
HEG
AEE
BGEBGBG
ADDHBG
GFGABC
GDEC
BGEBGB
EAEF
BBG
GBGDH
FCGEH
BEEHEG
EACBCEG
GEAB
GBFE
HDAB
EEDAF
ACBCEG
FEGHEDG
HCAAC
HFBGEBG
HGCBF
GEBGBG
BAAHA
EBEED
CCEFAGA
BAD
FHBGDEG
AACAAA
EGF
AEF
ECEG
AGGCEBD
CEBDCCC
DCCEF
FGAB
HGDFCAA
AACGBD
AAGFC
AHC
FEBCC
EDE
BBGDEED
AACC
CAAC
EGDCE
DCFFGEH
BCEG
CEDHAG
GHE
AFCD
BGCBBFH
DHBCEF
BGBGD
DECGDDA
HDBAGEC
HGCBFEH
HHDBCHG
AGDDHD
EECGHA
DDF
DHB
EEB
HEBDA
DEDDH
EEFFAG
HCHCED
DDAAC
EEHAGEA
EFA
HCC
CCFDEE
FCFHDC
GHED
DFBE
EADHAGG
GGEB
AGHGC
HBBEBG
AHDCAA
CCGAG
HGBGEE
FEEF
EECGHA
CCHED
ECGHAHG
EEDAFH
FBAGCDE
HAGACG
FAGA
DBH
HEBDA
HHCCACE
BEBGCAH
HDDH
FFECHD
HDAB
DACAF
AEEHAGE
GFCG
HDDDF
HHDBA
HGFGA
HDF
CCHGD
AGGBA
DBAGE
GGAAFF
GDBC
CHDABD
FFB
DHBB
BDAH
DDH
HDF
GAED
EADECDC
DDBA
AAGFCEE
EGFBAGC
DDCCEF
GFC
CGF
HDFE
BDCCCE
HGD
EEFB
CCACED
EAFDEF
HDCFCE
BBEF
FAG
HBEGBE
EDAEE
FHE
CGH
FGDEC
AEA
CAAD
DCF
DDBH
GBGDCH
AAGFC
DCB
DEBAA
BEFDADC
ECEBE
GHGD
EDEGFBA
DBCFH
AFA
FGC
DABD
DDCC
AAHAFH
FCFEA
DBHCH
BBEB
AGDD
CCGA
DGACG
EBCCED
FEGHE
DBA
GFCEEAG
FFHDCA
HDCG
FBCGC
FFGEHDC
CFEA
FDEBA
EADCBA
CCBAGC
FHCGEH
ADEBFCB
DCFFGEH
CEDD
HECFC
GGCEBD
GGG
EBGCA
FGEHD
DDCH
EGECEDC
CHD
FACH
EGEFA
GFEDHFB
FFEG
ECCB
DBAGEC
EEFG
AGE
CHCAH
AHEB
GBD
AHE
GAGHEC
CEACBCE
DBCFHAG
FCEA
DAH
CACED
CCHFEE
ACEDD
CBFEHBA
CBC
BFCDG
EGHCCE
DDFBE
EAGCF
FFE
AFFECHD
AHH
HAF
HHB
HFBGEBG
CDDEG
CCCEEA
CCFFE
ABFCDGA
CGCHDD
EEAADBA
ACEDDHD
BACEG
FEB
FECHDC
FCEEF
FHG
AEFH
HFEDB
AFFE
GFG
EGFBA
BEEHEG
AACCH
AEDDB
EAFD
DBAC
GBGDHED
FHB
BHDG
HDCG
EDGB
EDDHDBA
FCB
CFHAGH
GFED
FCCDBF
ABG
CHFEE
DBBEFD
FAEEHAG
EBFC
FGDECE
CDGAH
DAC
GEHDC
BEFDADC
GBGF
EECG
CEEAAD
EHHBGC
GAEDFCC
HAFH
EAAGF
CAFC
EHH
```

```output1
FFGAEEABCE.CBAEBH.C.
EHBFHCGHFGA.G.AE.AAC
.GBAED.ACHBDG.GDGG.C
DDFADEGGBDEFFACBB.FA
.EFBFGEEDGHBCGCEDEEB
HAAHBDAGBCCE.CCADAFH
GAFFE.G.CBEG.F.DDCEE
ACE.F.GDAAGH.DHECDBA
DAFB.HHFBABHEBBBD.CE
EGFFHDGEHFBAB.DECADA
DEAHCFGG..CG.BGDBBEC
.CBAGCAFCDEBGACEHF.D
GG.CGFA.GHGHG.GG.EHH
CECG.G.DGBCCAACFCDH.
FB.DH.F.CEHEH.CGGHFB
ADHCH.HCCBFGBADFBACE
CE.EHC.AAGADC.FAAEFB
ED.F..HGEACAHACFGAGG
AADAABC.CA.GF.CADCAF
CFAHEFGCA.CFGFGECBCH
```