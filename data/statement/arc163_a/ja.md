配点 : $300$ 点

## 問題文

長さ $N$ の英小文字からなる文字列 $S$ が与えられます。$S$ を $2$ 個以上の連続部分文字列に分割し、それらが辞書順で狭義単調増加になるようにすることが出来るか判定してください。

厳密に書くと、以下の条件を全て満たす文字列の列 $t=(t_1,t_2,\dots,t_k)$ が存在するか判定してください。

- <p>列の長さ $k$ は $2$ 以上である。</p>
- <p>$t_i$ は空でない。($1 \le i \le k$)</p>
- <p>$t_1,t_2,\dots,t_k$ をこの順で連結すると $S$ と一致する。</p>
- <p>$1 \le i &lt; k$ を満たす整数 $i$ に対して、$t_i$ は $t_{i+1}$ より辞書順で小さい。</p>

$T$ 個のテストケースが与えられるので、それぞれについて答えを求めてください。

 辞書順とは？

文字列 $S = S_1S_2\ldots S_{|S|}$ が文字列 $T = T_1T_2\ldots T_{|T|}$ より**辞書順で小さい**とは、下記の 1. と 2. のどちらかが成り立つことを言います。
ここで、$|S|, |T|$ はそれぞれ $S, T$ の長さを表します。

1. $|S| \lt |T|$ かつ $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$。
2. ある整数 $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ が存在して、下記の $2$ つがともに成り立つ。
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$
2.    - $S_i$ が $T_i$ よりアルファベット順で小さい文字である。

## 制約

- $1 \le T \le 2000$
- $2 \le N \le 2000$
- $S$ は長さ $N$ の英小文字からなる文字列
- $1$ 個の入力に含まれるテストケースについて、それらの $N$ の総和は $2000$ を超えない。

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

ここで、$\mathrm{case}_i$ とは $i$ 個目のテストケースである。各テストケースは以下の形式で与えられる。

> $N$
> 
> $S$

## 出力

$T$ 行出力せよ。

$i(1 \le i \le T)$ 行目には、$i$ 個目のテストケースにおいて $S$ を条件を満たすように分割できるならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
5
4
abac
3
cac
2
ab
12
abababababab
5
edcba
```

```output1
Yes
No
Yes
Yes
No
```

$1$ 個目のテストケースは、$S$ を `a`,`ba`,`c` と分割すればよいです。

$2$ 個目のテストケースは、$S$ をどのように分割しても辞書順で狭義単調増加にすることは出来ません。