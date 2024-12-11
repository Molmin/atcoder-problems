配点 : $400$ 点

## 問題文

長さ $N$ の英小文字のみからなる文字列 $s$ が与えられます。
すぬけ君は $s$ から `fox` という部分文字列を $1$ つ選んで取り除き、その前後の部分を連結する、という操作を何度でも行うことができます。

すぬけ君が操作を何度か行ったあと、$s$ の長さは最小でいくつになりえますか？

## 制約

- $1 \leq N \leq 2 \times 10^{5}$
- $s$ は英小文字のみからなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $s$

## 出力

すぬけ君が操作を何度か行ったあとの $s$ の長さとしてありうる値の最小値を出力せよ。

```input1
6
icefox
```

```output1
3
```

- `icefox` の末尾 `fox` を取り除くことで $s$ を `ice` にすることができます。

```input2
7
firebox
```

```output2
7
```

- `fox` という部分文字列が存在しません。

```input3
48
ffoxoxuvgjyzmehmopfohrupffoxoxfofofoxffoxoxejffo
```

```output3
27
```