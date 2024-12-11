配点 : $400$ 点

## 問題文

高橋くんと青木さんの前に $N$ 皿の料理が置かれています。
便宜上、これらの料理を料理 $1$、料理 $2$、…、料理 $N$ と呼びます。

高橋くんが料理 $i$ を食べると彼は $A_i$ ポイントの *幸福度* を得ます。
また、青木さんが料理 $i$ を食べると彼女は $B_i$ ポイントの幸福度を得ます。

彼らは、高橋くんから始めて交互に、料理を $1$ 皿ずつ選んで食べることを料理が尽きるまで続けます。
ただし、彼らはともに、「最終的に自分が得る幸福度の総和」から「最終的に相手が得る幸福度の総和」を引いた値を最大化するように料理を選びます。

このとき、「最終的に高橋くんが得る幸福度の総和」から「最終的に青木さんが得る幸福度の総和」を引いた値はいくつになるでしょうか？

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- 入力される値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $B_1$
> 
> $:$
> 
> $A_N$ $B_N$

## 出力

「最終的に高橋くんが得る幸福度の総和」から「最終的に青木さんが得る幸福度の総和」を引いた値を出力せよ。

```input1
3
10 10
20 20
30 30
```

```output1
20
```

この例では、二人のどちらも、料理 $1$ を食べると $10$ ポイント、料理 $2$ を食べると $20$ ポイント、料理 $3$ を食べると $30$ ポイントの幸福度を得ます。

この場合、高橋くんと青木さんの「好み」が一致しているため、彼らは毎回残っている料理のうち最も幸福度を多く得られる料理を選びます。よって、最初に高橋くんは料理 $3$ を選び、次に青木さんは料理 $2$ を選び、最後に高橋くんが料理 $1$ を選ぶため、答えは $(30 + 10) - 20 = 20$ です。

```input2
3
20 10
20 20
20 30
```

```output2
20
```

この例では、高橋くんは料理 $1,2,3$ のいずれを食べても $20$ ポイントの幸福度を得ますが、青木さんは料理 $1$ を食べると $10$ ポイント、料理 $2$ を食べると $20$ ポイント、料理 $3$ を食べると $30$ ポイントの幸福度を得ます。

今回は、青木さんのみに料理の好き嫌いがあるため、彼らは毎回残っている料理のうち青木さんが最も幸福度を多く得られる料理を選びます。よって、最初に高橋くんは料理 $3$ を選び、次に青木さんは料理 $2$ を選び、最後に高橋くんが料理 $1$ を選ぶため、答えは $(20 + 20) - 20 = 20$ です。

```input3
6
1 1000000000
1 1000000000
1 1000000000
1 1000000000
1 1000000000
1 1000000000
```

```output3
-2999999997
```

答えは $32$ ビット整数に収まらない可能性があります。