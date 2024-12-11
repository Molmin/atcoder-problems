## ストーリー

日本では正月に「書き初め大会」という伝統的な書道のコンテストが開催される。
AtCoder社の書き初め大会は、筆を使って文字を書く代わりに、各社員がそれぞれ特殊なキー配列のキーボードを使ってタイピングし、PCの画面上に自分の好きな文字列を出力して発表するイベントである。

占いにより今年の縁起の良い単語をたくさん知った高橋社長は、全ての縁起の良い単語を（連続する）部分文字列として含む文字列（これを**縁起の良い文字列**と呼ぶ）を出力しようと考えた。たとえば、縁起の良い単語が `AC`, `WA`, `CE` の3つであった場合、 `WHITESPACE` は `WA` を部分文字列として含まないため**縁起の良い文字列**ではないが、 `FACEWASH` は全ての縁起の良い単語を部分文字列として含んでいるため**縁起の良い文字列**である。

キーボード上での指の移動および打鍵には移動距離に応じた時間がかかるが、完成した文字列の発表は社長から順に行うことになっているため、できるだけ短い時間で**縁起の良い文字列**を完成させたい。指の移動方法を決めるプログラムを作成して、高橋社長の手助けをして欲しい。

## 問題文

$N\times N$ マスのグリッド上に表現されたキー配列が与えられる。一番左上のマスの座標を $(0,0)$ とし、そこから下方向に $i$ マス、右方向に $j$ マス移動した先のマスの座標を $(i,j)$ とする。各マスには英大文字 $A_{i,j}$ が書かれており、初期状態でマス $(s_i, s_j)$ に指が置かれている。

英大文字からなる $M$ 個の文字列 $t_1,\cdots,t_M$ が与えられる。文字列であって、全ての $t_k$ を（連続する）部分文字列として含むものを**縁起の良い文字列**と定義する。空文字列 $S$ から開始して、以下の操作を $5000$ 回以下行うことで、 $S$ が**縁起の良い文字列**となるようにしたい。

- マス $(i, j)$ を指定し、指をマス $(i, j)$ に移動させたのち $S$ の末尾に $A_{i, j}$ を追加する。操作前に指が置かれていた座標を $(i', j')$ とすると、この操作によりコスト $|i-i'|+|j-j'|+1$ が発生する。マス $(i, j)$ とマス $(i', j')$ は同じマスであってもよく、その際に発生するコストは $1$ である。

できるだけ少ないコストで $S$ を**縁起の良い文字列**にできるような操作列を求めよ。

## 得点

$t_k$ のうち $S$ に（連続する）部分文字列として含まれるものの個数を $K$ 、操作のコストの総和を $T$ としたとき、以下の得点が得られる。

- $K\lt M$ の場合、 $\mathrm{round}(1000 \times (K+1)/M)$
- $K=M$ の場合、 $\mathrm{max}(10000-T, 1001)$

操作回数が $5000$ を超えた場合や、範囲外のマスを指定した場合は WA と判定される。

テストケースは全部で 150 個あり、各テストケースの得点の合計が提出の得点となる。
一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 同じ得点を複数の参加者が得た場合、提出時刻に関わらず同じ順位となる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $s_i$ $s_j$
> 
> $A_{0,0}$$A_{0,1}$$\cdots$$A_{0,N-1}$
> 
> $A_{1,0}$$A_{1,1}$$\cdots$$A_{1,N-1}$
> 
> $\vdots$
> 
> $A_{N-1,0}$$A_{N-1,1}$$\cdots$$A_{N-1,N-1}$
> 
> $t_1$
> 
> $\vdots$
> 
> $t_M$

- $N=15$
- $M=200$
- $0\le s_i,s_j\le N-1$
- $A_{i,0}A_{i,1}\cdots A_{i,N-1}$ は英大文字からなる長さ$N$の文字列
- $t_k$ は英大文字からなる長さ $5$ の文字列
- $t_k\ne t_{k'}$ $(k\ne k')$
- 全ての英大文字 $c$ について、 $A_{i,j}=c$ となるような座標 $(i,j)$ が1つ以上存在することが保証される

## 出力

操作回数を $L$ $(0\le L\le 5000)$ 、$l$ 回目の操作で指定したマスを $(i_l, j_l)$ $(0\le i_l, j_l\le N-1)$ としたとき、以下の形式で標準出力に出力せよ。

> $i_1$ $j_1$
> 
> $\vdots$
> 
> $i_L$ $j_L$

[例を見る](https://img.atcoder.jp/ahc028/fWRno7xB.html?lang=ja&amp;seed=0&amp;output=sample)

## 入力生成方法

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ と表す。

### $(s_i,s_j)$ の生成

$s_i=\mathrm{rand}(0, N-1)$, $s_j=\mathrm{rand}(0, N-1)$ とする。

### $A_{i,j}$ の生成

全ての $(i, j)$ に対して、 $A_{i,j}$ を英大文字から一様ランダムに選択する。ただし、どの $A_{i,j}$ にも含まれない英大文字が存在する場合は、全ての $A_{i,j}$ の生成をやり直す。

### $t_k$ の生成

全ての $k$ に対して、英大文字から一様ランダムに $5$ 回生成することで長さ $5$ の文字列 $t_k$ を生成する。ただし、 既に生成した $t_{k'}$ であって、$t_k=t_{k'}$ となるものが存在する場合は $t_k$ の生成をやり直す。最後に、$t_1, t_2, \cdots, t_M$ を辞書順に並び替える。

## ツール(入力ジェネレータ・ビジュアライザ)

- [Web版](https://img.atcoder.jp/ahc028/fWRno7xB.html?lang=ja): ローカル版より高性能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc028/fWRno7xB.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。
- [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc028/fWRno7xB_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

コンテスト期間中における、ビジュアライズ結果の共有や解法・考察に関する言及は禁止されています。ご注意下さい。

```input1
15 200
0 14
AWVECXNGDCNGBMQ
URGNCIDJOVTHSOB
KIGBCYVNJUYVRWC
EIXOMNZZLEBHWOX
DLPDTIFGWMQOMAQ
YSUDWSIOQRTBURH
DKTQGUCVOJIYSPP
SVLNHOOCDLDAMNF
JLFXHXINKYBVCGU
ESYKRPBSPYJIWZU
LRGACNSZRPKESVK
HDMSMPEBCXCTZTX
KMIXHCXJFZICBJX
TEGKFZOGIQLONVD
LVBIWLIHLAGARHI
ABYNP
AOTLX
ARZVJ
ASPBI
AXFSO
AZPGI
BCPZL
BENRS
BOVIS
BUBNT
BYUJQ
CBYSK
CINAP
CNCBN
COOUV
COPDO
CQQZD
DADKB
DGXFM
DLQFC
DQNCL
DRGYV
DSDUU
DWIZI
DZMWP
EBYAI
EKKOD
EKYQJ
EMLYM
EQLUL
ERGRD
ERWVW
ESLTA
FBGKH
FBPWX
FCTHA
FOIOY
FTPWX
FVJEJ
FYZVJ
GCSZE
GEBGT
GEPUH
GVLGE
GWTIL
GYEZT
HCGWP
HEQWH
HFXXC
HGWEW
HIPKG
HKHVZ
HUCSQ
HWNQT
HXIOS
IEOTI
IFMJA
IKFLQ
IKOTA
ILQFS
IQTXL
IRNAB
IXTRT
IZFIV
JBWWJ
JDYNL
JHWXZ
JKIRA
JNPBO
JODMD
JOWSW
JRMIO
JXUSI
JYCOD
JYKWU
KASYC
KDZPV
KRJKE
KVINZ
KZKQA
LEZYS
LHICS
LMLSY
LNUCX
MBPRA
MEAPP
MFJNA
MFRNF
MLXDV
MNQSF
MUSXF
MXRFN
MYGLL
NJGES
NQZTU
NRKRQ
NTAPK
NYOWZ
OAUQD
OKRRY
OMIAK
ONPWH
OUFYF
OXASM
OXSMM
PBAMY
PEJQR
PJFGR
PJXXR
PMQAC
PMXFC
POLAM
PPPAD
PRSKX
PSGLI
PUORC
PUUUP
PVNSO
PXUII
PZEPP
QDMII
QDXYM
QHHZU
QLNRU
QNDEH
QNWKI
QPCPS
QULFB
QVVVG
RGHTR
RGQWY
RHYGF
RIELA
RMAKH
ROVKG
RSSYP
RSULP
RWBAX
SICZS
SJBBE
SNCZK
SUMHS
SXEZH
SYXFA
TANTF
TDVIQ
TGMCV
THIWA
TLUET
TMAYP
TQCSB
TXYKE
UAQKR
UGHLN
UJKSD
ULGYC
UNUSS
UWNUQ
VBUYH
VCUMT
VIRUK
VMXTJ
VNVCN
VPBGX
WBWLB
WCNUF
WHAXY
WKAKT
WNMDP
WPHPJ
WULBH
WVFWE
WVYTO
WWCBS
WWUFL
XESTB
XHYES
XKDGD
XKHYZ
XMOJJ
XPCQR
XQEHC
XSOKS
XTGPA
XTLCE
XXSWV
XXVDA
YAPDH
YBDJA
YCNGF
YLDQD
YLFGP
YNBDS
YQGBT
YVJLV
YYPIT
ZBGGI
ZORJO
ZQMBO
ZYYVG
```

```output1
1 13
2 14
4 10
5 8
3 7
4 3
6 1
7 3
9 4
8 8
5 9
4 10
8 11
8 11
10 13
14 10
13 10
10 9
9 14
8 14
9 14
6 13
```