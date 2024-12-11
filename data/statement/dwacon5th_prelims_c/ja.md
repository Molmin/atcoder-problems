配点 : $600$ 点

## 問題文

ドワンゴのコンテンツ配信基盤システム Dwango Media Cluster は、略して DMC と呼ばれています。<br>
この名前をかっこ良いと感じたニワンゴくんは、文字列の DMC らしさを数値として定義することにしました。<br>
具体的には、長さ $N$ のある文字列 $S$ と3以上の整数 $k$ が与えられた時、以下を満たす整数の3つ組 $(a,b,c)$ の個数を $S$ の $k$-DMC 数と呼ぶことにします。

- $0 \leq a &lt; b &lt; c \leq N - 1$
- $S[a]$ = `D`
- $S[b]$ = `M`
- $S[c]$ = `C`
- $c-a &lt; k$

ここで、$S[a]$ は $S$ の $a$ 番目の文字を表します。先頭の文字は $0$ 文字目として扱います (つまり、$0 \leq a \leq N - 1$ です)。

ある文字列 $S$ と $Q$ 個の整数 $k_0, k_1, ..., k_{Q-1}$ に対して、$k_i$-DMC 数をそれぞれ計算してください。

## 制約

- $3 \leq N \leq 10^6$
- $S$ は`A` - `Z` からなる文字列
- $1 \leq Q \leq 75$
- $3 \leq k_i \leq N$
- 入力として与えられる数値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$
> 
> $Q$
> 
> $k_{0}$ $k_{1}$ $...$ $k_{Q-1}$

## 出力

$Q$ 行出力せよ。<br>
$i$ 行目 $(0 \leq i \leq Q-1)$ には、文字列 $S$ の $k_i$-DMC 数を出力せよ。

## 入力例1

```plain
18
DWANGOMEDIACLUSTER
1
18
```

## 出力例1

```plain
1
```

$(a,b,c) = (0, 6, 11)$ が条件を満たします。<br>
Dwango Media Cluster は、ニワンゴくんの定義では意外と DMC らしくないようです。

## 入力例2

```plain
18
DDDDDDMMMMMCCCCCCC
1
18
```

## 出力例2

```plain
210
```

$6\times 5\times 7$ 個の組み合わせがありえます。

## 入力例3

```plain
54
DIALUPWIDEAREANETWORKGAMINGOPERATIONCORPORATIONLIMITED
3
20 30 40
```

## 出力例3

```plain
0
1
2
```

$c-a &lt; k_i$ 以外の条件は $(a, b, c) = (0, 23, 36), (8, 23, 36)$ が満たします。<br>
ちなみに、DWANGO は「Dial-up Wide Area Network Gaming Operation」の頭文字です。

## 入力例4

```plain
30
DMCDMCDMCDMCDMCDMCDMCDMCDMCDMC
4
5 10 15 20
```

## 出力例4

```plain
10
52
110
140
```