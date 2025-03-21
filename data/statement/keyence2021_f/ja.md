配点 : $1000$ 点

## 問題文

$s$ を `keyence` を $N$ 回繰り返した文字列とします。
$s$ の $0$ 個以上の文字を削除した後、残った文字を元の順序を保ったまま連結して新しい文字列 $s^{\prime}$ を作ることを考えます。

削除する位置の選び方は $2^{7N}$ 通りあります。これらのうち、$s^{\prime}$ が $t$ と一致するようなものの個数を $998244353$ で割ったあまりを求めてください。

## 制約

- $1 \leq N \leq 10^{18}$
- $1 \leq |t| \leq 2.5 \times 10^5$
- $t$ は `c`, `e`, `k`, `n`, `y` のみからなる文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $t$

## 出力

削除する位置の選び方のうち、$s^{\prime}$ が $t$ と一致するようなものの個数を $998244353$ で割ったあまりを出力せよ。

```input1
2
key
```

```output1
6
```

- $s=$ `keyencekeyence` です。
- $s^{\prime}=$ `key` となるような削除する位置の選び方は $6$ 通りです。

```input2
2
ccc
```

```output2
0
```

- $s^{\prime}=$ `ccc` となるような削除する位置の選び方は $0$ 通りです。

```input3
100
keyneeneeeckyycccckkke
```

```output3
275429980
```

- $998244353$ で割ったあまりを求めるのを忘れずに。