配点 : $300$ 点

## 問題文

すぬけ君は、次のルールに従い、長さ $N$ の文字列 $t$ を長さ $N - 1$ の文字列 $t'$ へ変えることができます。

- 各 $i$ ($1 \leq i \leq N - 1$) について、$t'$ の $i$ 文字目は $t$ の $i$, $i + 1$ 文字目のどちらかである。

英小文字のみからなる文字列 $s$ があります。
すぬけ君の目標は、$s$ に上記の操作を繰り返し行い、$s$ が単一の文字のみからなるようにすることです。
目標を達成するために必要な操作回数の最小値を求めてください。

## 制約

- $1 \leq |s| \leq 100$
- $s$ は英小文字のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $s$

## 出力

目標を達成するために必要な操作回数の最小値を出力せよ。

```input1
serval
```

```output1
3
```

例えば、`serval` → `srvvl` → `svvv` → `vvv` と変えればよいです。

```input2
jackal
```

```output2
2
```

例えば、`jackal` → `aacaa` → `aaaa` と変えればよいです。

```input3
zzz
```

```output3
0
```

最初から $s$ が単一の文字のみからなっています。

```input4
whbrjpjyhsrywlqjxdbrbaomnw
```

```output4
8
```

$8$ 回の操作によって、$s$ を `rrrrrrrrrrrrrrrrrr` へ変えることができます。