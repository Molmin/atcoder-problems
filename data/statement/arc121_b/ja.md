配点 : $500$ 点

## 問題文

すぬけ君は $1$ から $2N$ の番号がついた $2N$ 匹の犬を飼っています。

犬 $i$ のかわいさは $a_i$ です。
それぞれの犬の体色は赤、緑、青のいずれかで、犬 $i$ の体色は $c_i$ です。
$c_i$ は `R`, `G`, `B` のいずれかであり、`R` ならばその犬の体色が赤であることを、`G` ならば緑であることを、`B` ならば青であることを表します。

すぬけ君は $N$ 棟の犬小屋を持っており、それぞれの犬小屋に $2$ 匹の犬を住まわせようとしています。
どの犬もちょうど一つの犬小屋に住んでいるように住まわせる必要があることに注意してください。

$2$ 匹の犬を同じ犬小屋に住まわせるとその小屋には *不満* が生じます。
不満の度合いは整数で表され、犬 $i,j$ が同じ小屋にいるとき生じる不満は $c_i = c_j$ ならば $0$、そうでなければ $|a_i - a_j|$ です。

$N$ 棟の犬小屋に犬を $2$ 匹ずつ住まわせた結果生じる不満の総和としてありうる値の最小値を求めてください。

## 制約

- $1 \leq N \leq 10^{5}$
- $1 \leq a_i \leq 10^{15}$
- $a_i$ は整数
- $c_i$ は `R`, `G`, `B` のいずれか

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_{1}$ $c_{1}$
> 
> $\vdots$
> 
> $a_{2N}$ $c_{2N}$

## 出力

$N$ 棟の犬小屋に犬を $2$ 匹ずつ住まわせた結果生じる不満の総和としてありうる値の最小値を出力せよ。

```input1
1
1 R
2 G
```

```output1
1
```

- 犬 $1$ のかわいさは $1$、犬 $2$ のかわいさは $2$ です。
- $c_1 \neq c_2$ より、不満は $1$ となります。

```input2
1
1 B
2 B
```

```output2
0
```

- 犬 $1$ のかわいさは $1$、犬 $2$ のかわいさは $2$ です。
- $c_1 = c_2$ より、不満は $0$ となります。

```input3
10
585 B
293 B
788 B
222 B
772 G
841 B
115 R
603 G
450 B
325 R
851 B
205 G
134 G
651 R
565 R
548 B
391 G
19 G
808 B
475 B
```

```output3
0
```