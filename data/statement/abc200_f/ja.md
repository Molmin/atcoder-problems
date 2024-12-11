配点 : $600$ 点

## 問題文

`0`, `1`, `?` のみからなる文字列 $S$ があります。この文字列を $K$ 個連結したものを $T$ とします。<br>
この文字列の `?` を全て `0` か `1` に置き換えた文字列は、$S$ の中に含まれる `?` の数を $q$ 個とすると、全部で $2^{Kq}$ 通り考えられますが、その全てについて以下の問題を解いて、その答えの和を $(10^9+7)$ で割った余りを求めてください。

`?` を置き換えた後の文字列を $T'$ とします。$T'$ に以下の操作を繰り返し行うことで全ての文字を同じにするとき、必要な最小の操作回数は何回ですか？

- $1 \le l \le r \le |T'|$ となる整数 $l,r$ を選ぶ。そして、$T'$ の $l$ 文字目から $r$ 文字目(両端含む)までの各文字を、`0` であれば `1` に、`1` であれば `0` に変更する。

## 制約

- $1 \le |S| \le 10^5$
- $1 \le K \le 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$
> 
> $K$

## 出力

答えを整数として出力せよ。

```input1
101
2
```

```output1
2
```

文字列 $T=$ `101101` で、ここには `?` が含まれません。よって、考えられる唯一の $T'=$ `101101` についての答えを求めればよいです。<br>
例えば、`101101` $\rightarrow$ `110011` $\rightarrow$ `111111` と操作を行えば、 $2$ 回で全ての文字列を同じにすることができます。<br>
$1$ 回以下の操作で全ての文字列を同じにすることはできません。

```input2
?0?
1
```

```output2
3
```

文字列 $T'$ として考えられるものは `000`, `001`, `100`, `101` の $4$ 通りです。

```input3
10111?10??1101??1?00?1?01??00010?0?1??
998244353
```

```output3
235562598
```

答えは非常に大きくなることがあるので、 $(10^9+7)$ で割った余りを求めてください。