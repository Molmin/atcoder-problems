配点 : $200$ 点

## 問題文

高橋君は青いカードを $N$ 枚，赤いカードを $M$ 枚持っています。
カードにはそれぞれ文字列が書かれており，
$i$ 枚目の青いカードに書かれている文字列は $s_i$，
$i$ 枚目の赤いカードに書かれている文字列は $t_i$ です。

高橋君は，文字列を $1$ つ言います。
そして，全てのカードを確認し，
その文字列が書かれた青いカードを $1$ 枚見つけるごとに $1$ 円貰えます。
また，その文字列が書かれた赤いカードを $1$ 枚見つけるごとに $1$ 円失います。

なお，高橋君の言った文字列と，カードに書かれた文字列が完全に一致していた場合のみを考えます。
例えば，高橋君が `atcoder` と言った場合，`atcoderr`，`atcode`，`btcoder` などと書かれた青いカードがあってもお金は貰えません(逆に，このような文字列が書かれた赤いカードがあってもお金を失うことはありません)。

高橋君は，最大で差し引き何円貰うことができるでしょうか？

ただし，違うカードに同じ文字列が書かれていることもあることに注意してください。

## 制約

- $N, M$ は整数
- $1 \leq N, M \leq 100$
- $s_1, s_2, ..., s_N, t_1, t_2, ..., t_M$ は全て長さ $1$ 以上 $10$ 以下の文字列で，英小文字のみからなる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $s_1$
> 
> $s_2$
> 
> $:$
> 
> $s_N$
> 
> $M$
> 
> $t_1$
> 
> $t_2$
> 
> $:$
> 
> $t_M$

## 出力

高橋君が最大で差し引き $X$ 円貰える時，$X$ を出力せよ。

```input1
3
apple
orange
apple
1
grape
```

```output1
2
```

`apple` と言えば，$2$ 円貰うことができます。

```input2
3
apple
orange
apple
5
apple
apple
apple
apple
apple
```

```output2
1
```

`apple` と言うと，$3$ 円失ってしまいます。`orange` と言えば，$1$ 円貰うことができます。

```input3
1
voldemort
10
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
```

```output3
0
```

`voldemort` と言うと，$9$ 円失ってしまいます。例えば `orange` と言えば，$1$ 円も失わずにすみます。

```input4
6
red
red
blue
yellow
yellow
red
5
red
red
yellow
green
blue
```

```output4
1
```