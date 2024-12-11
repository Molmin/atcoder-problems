配点 : $550$ 点

## 問題文

`a`, `b` からなる長さ $6$ 以下の空でない文字列の集合 $S=\lbrace s _ 1,s _ 2,\ldots,s _ M\rbrace$ が与えられます。
以下の条件を満たす `a`, `b` からなる長さ $N$ の文字列 $T$ はいくつあるか求めてください。

- 任意の $s _ i\in S$ に対して、$T$ は $s _ i$ を連続する部分文字列として含まない

ただし、答えは非常に大きくなる可能性があるので、答えを $998244353$ で割った余りを求めてください。

## 制約

- $1\leq N\leq10^{18}$
- $1\leq M\leq126$
- $N,M$ は整数
- $s _ i$ は `a`, `b` からなる長さ $6$ 以下の空でない文字列
- $s _ i\neq s _ j\ (1\leq i\lt j\leq M)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $s _ 1$
> 
> $s _ 2$
> 
> $\vdots$
> 
> $s _ M$

## 出力

答えを $998244353$ で割ったあまりを $1$ 行で出力せよ。

```input1
4 3
aab
bbab
abab
```

```output1
10
```

`a`, `b` からなる長さ $4$ の文字列で、連続する部分列として `aab`, `bbab`, `abab` をもたないようなものは
`aaaa`, `abaa`, `abba`, `abbb`, `baaa`, `baba`, `babb`, `bbaa`, `bbba`, `bbbb` の $10$ 個なので、$10$ を出力してください。

```input2
20 1
aa
```

```output2
17711
```

```input3
1000000007 28
bbabba
bbbbaa
aabbab
bbbaba
baaabb
babaab
bbaaba
aabaaa
aaaaaa
aabbaa
bbaaaa
bbaabb
bbabab
aababa
baaaba
ababab
abbaba
aabaab
ababaa
abbbba
baabaa
aabbbb
abbbab
baaaab
baabbb
ababbb
baabba
abaaaa
```

```output3
566756841
```

$998244353$ で割ったあまりを出力してください。