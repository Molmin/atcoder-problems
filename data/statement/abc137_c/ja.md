配点 : $300$ 点

## 問題文

文字列 $a$ に含まれる文字を何らかの順序で並べることで得られる文字列を $a$ の *アナグラム* と呼びます。

例えば、`greenbin` は `beginner` のアナグラムです。このように、同じ文字が複数回現れるときはその文字をちょうどその回数だけ使わなければなりません。

$N$ 個の文字列 $s_1, s_2, \ldots, s_N$ が与えられます。それぞれの文字列は長さが $10$ で英小文字からなり、またこれらの文字列はすべて異なります。二つの整数 $i, j$ $(1 \leq i &lt; j \leq N)$ の組であって、$s_i$ が $s_j$ のアナグラムであるようなものの個数を求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $s_i$ は長さ $10$ の文字列である。
- $s_i$ の各文字は英小文字である。
- $s_1, s_2, \ldots, s_N$ はすべて異なる。

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

## 出力

二つの整数 $i, j$ $(1 \leq i &lt; j \leq N)$ の組であって、$s_i$ が $s_j$ のアナグラムであるようなものの個数を出力せよ。

```input1
3
acornistnt
peanutbomb
constraint
```

```output1
1
```

$s_1 =$ `acornistnt` は $s_3 =$ `constraint` のアナグラムです。他に $s_i$ が $s_j$ のアナグラムであるような $i, j$ の組はないため、答えは $1$ です。

```input2
2
oneplustwo
ninemodsix
```

```output2
0
```

$s_i$ が $s_j$ のアナグラムであるような $i, j$ の組がないときは $0$ と出力してください。

```input3
5
abaaaaaaaa
oneplustwo
aaaaaaaaba
twoplusone
aaaabaaaaa
```

```output3
4
```

ここにそのようなケースを置くことはできませんが、答えは $32$ bit 整数型に収まらない可能性があるので注意してください。