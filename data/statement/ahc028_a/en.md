## Story

In Japan, a traditional calligraphy contest known as 'Kakizome Taikai' is held during the New Year.
AtCoder's Kakizome Taikai is an event in which, instead of writing with a brush, each employee types on a keyboard with a special key layout and outputs his/her favorite string on a PC screen for presentation.

After learning many lucky words for this year through fortune-telling, CEO Takahashi decided to output a string containing all the lucky words as a (contiguous) substring (called a **lucky string**).
For example, if the lucky words are `AC`, `WA`, and `CE`, then `WHITESPACE` is not a **lucky string** because it does not contain `WA` as a substring, but `FACEWASH` is a **lucky string** because it contains all lucky words as substrings.

Moving and typing a finger on the keyboard takes time depending on the distance between keys.
Because Takahashi is first in the order of presentation, he wants to type a **lucky string** as quickly as possible.
Please help him by creating a program to determine how to move his finger.

## Problem Statement

You are given a key layout represented on an $N \times N$ grid.
Let $(0, 0)$ be the coordinates of the top-left square, and $(i, j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.
Each square contains an uppercase English letter $A_{i,j}$, and initially, the finger is placed on the square $(s_i, s_j)$.

You are given $M$ strings $t_1,\cdots,t_M$ consisting of uppercase English letters.
A string that contains all $t_k$ as (contiguous) substrings is defined as a **lucky string**.
Starting with an empty string $S$, the goal is to make $S$ a **lucky string** by performing the following operations no more than $5000$ times.

- Specify square $(i, j)$, move the finger to this square, and then append $A_{i, j}$ to the end of $S$. If the coordinates of the square where the finger was placed before the operation are $(i', j')$, this operation incurs a cost of $|i-i'|+|j-j'|+1$. The squares $(i, j)$ and $(i', j')$ can be the same, in which case the incurred cost is $1$.

Find a sequence of operations that makes $S$ a **lucky string** with as little cost as possible.

## Scoring

Let $K$ be the number of $t_k$ contained in $S$ as (contiguous) substrings, and $T$ be the total cost of the operations.
Then you will obtain the following score.

- If $K\lt M$, $\mathrm{round}(1000 \times (K+1)/M)$.
- If $K=M$, $\mathrm{max}(10000-T, 1001)$.

If the number of operations exceeds $5000$, or if a square outside the $N\times N$ grid is specified, it will be judged as WA.

There are 150 test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input

Input is given from Standard Input in the following format:

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
- $A_{i,0}A_{i,1}\cdots A_{i,N-1}$ is a string of length $N$ consisting of uppercase English letters.
- $t_k$ is a string of length $5$ consisting of uppercase English letters.
- $t_k\ne t_{k'}$ $(k\ne k')$
- For every uppercase $c$, it is guaranteed that there exists at least one coordinate $(i,j)$ such that $A_{i,j}=c$.

## Output

Let $L$ be the number of operations and $(i_l, j_l)$ $(0\le i_l, j_l\le N-1)$ be the square specified in the $l$-th operation.
Then, output to Standard Output in the following format.

> $i_1$ $j_1$
> 
> $\vdots$
> 
> $i_L$ $j_L$

[Show example](https://img.atcoder.jp/ahc028/fWRno7xB.html?lang=en&amp;seed=0&amp;output=sample)

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

### Generation of $(s_i,s_j)$

Generate $s_i=\mathrm{rand}(0, N-1)$ and $s_j=\mathrm{rand}(0, N-1)$.

### Generation of $A_{i,j}$

For each $(i, j)$, generate $A_{i,j}$ uniformly at random from uppercase English letters.
If there exists an uppercase letter that is not included in any $A_{i,j}$, regenerate all $A_{i,j}$.

### Generation of $t_k$

For each $k$, generate a string $t_k$ of length $5$ by randomly generating uppercase English letters $5$ times.
If there is an already generated $t_{k'}$ with $t_k=t_{k'}$, regenerate $t_k$.
Finally, sort $t_1, t_2, \cdots, t_M$ in lexicographic order.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc028/fWRno7xB.html?lang=en): This is more powerful than the local version and can display animations.
- [Local version](https://img.atcoder.jp/ahc028/fWRno7xB.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc028/fWRno7xB_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

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