配点 : $500$ 点

## 問題文

英小文字からなる二つの文字列 $s, t$ が与えられます。次の条件を満たす整数 $i$ $(1 \leq i \leq 10^{100} \times |s|)$ が存在するか判定し、存在する場合はそのような $i$ の最小値を求めてください。

- $s$ を $10^{100}$ 個連結して得られる文字列を $s'$ とする。$t$ は、文字列 ${s'}_1{s'}_2\ldots{s'}_i$ ($s'$ の先頭 $i$ 文字) の部分列である。

## 注記

- 文字列 $a$ の部分列とは、$a$ から $0$ 文字以上を削除して残った文字を相対的な順序を保ったまま連結して得られる文字列です。例えば、`contest` の部分列には `net`, `c`, `contest` などがあります。

## 制約

- $1 \leq |s| \leq 10^5$
- $1 \leq |t| \leq 10^5$
- $s, t$ は英小文字からなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $s$
> 
> $t$

## 出力

条件を満たす整数 $i$ が存在する場合はそのような $i$ の最小値を、存在しない場合は `-1` を出力せよ。

```input1
contest
son
```

```output1
10
```

$t =$ `son` は文字列 `contestcon` ($s' =$ `contestcontestcontest...` の先頭 $10$ 文字) の部分列であるため、$i = 10$ は条件を満たします。

一方で、$t$ は文字列 `contestco` ($s'$ の先頭 $9$ 文字) の部分列ではないため、$i = 9$ は条件を満たしません。

同様に、$8$ 以下の任意の整数も条件を満たしません。よって、条件を満たす整数 $i$ の最小値は $10$ です。

```input2
contest
programming
```

```output2
-1
```

$t =$ `programming` は $s' =$ `contestcontestcontest...` の部分列ではありません。よって、条件を満たす整数 $i$ は存在しません。

```input3
contest
sentence
```

```output3
33
```

ここにそのようなケースを置くことはできませんが、答えは $32$ bit 整数に収まらない可能性があるのでご注意ください。