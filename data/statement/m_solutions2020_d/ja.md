配点: $400$ 点

## 問題文

M 君は億万長者を目指して、明日から $N$ 日間は投資で稼ごうと考えました。現在の彼の所持金は $1000$ 円であり、株は持っていません。なお、M 君の住んでいる国で発行されている株は一種類です。  

彼は全国に知られる未来予知能力者であり、今後 $N$ 日間の株価が以下のようになることをすでに知っています。  

- $1$ 日目の株価は $A_1$ 円、$2$ 日目の株価は $A_2$ 円、・・・、$N$ 日目の株価は $A_N$ 円

$i$ 日目には、**その時点で所持する金と株の範囲内で**、M 君は次の取引を**何回でも**行えます。何も取引しない日があっても構いません。  

- 株式購入：$A_i$ 円を支払って、$1$ 株を受け取る。
- 株式売却：$1$ 株を売却し、$A_i$ 円を受け取る。

さて、M 君がうまく取引を行ったとき、彼の最終的な所持金は最大でいくらになるでしょうか？  

## 制約

- $2 \leq N \leq 80$
- $100 \leq A_i \leq 200$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。  

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

M 君の最終的な所持金としてありうる最大の金額を整数として出力してください。  

```input1
7
100 130 130 130 115 115 150
```

```output1
1685
```

この入力例では、M 君は $7$ 日間にわたって株の取引を行うことになります。例えば、次の方法で最終的な所持金を $1685$ 円とすることができます。  

- 最初、M 君は $1000$ 円を持っており、株は持っていない。
- $1$ 日目：株式購入を $10$ 回行う。$1000$ 円を支払って $10$ 株を購入し、所持金は $0$ 円となる。
- $2$ 日目：株式売却を $7$ 回行う。$7$ 株を売却して $910$ 円を受け取り、所持金は $910$ 円となる。
- $3$ 日目：株式売却を $3$ 回行う。$3$ 株を売却して $390$ 円を受け取り、所持金は $1300$ 円となる。
- $4$ 日目：何もしない。
- $5$ 日目：株式購入を $1$ 回行う。$115$ 円を支払って $1$ 株を購入し、所持金は $1185$ 円となる。
- $6$ 日目：株式購入を $10$ 回行う。$1150$ 円を支払って $10$ 株を購入し、所持金は $35$ 円となる。
- $7$ 日目：株式売却を $11$ 回行う。$11$ 株を売却して $1650$ 円を受け取り、所持金は $1685$ 円となる。

また、どのように取引を行っても、最終的な所持金を $1686$ 円以上にすることはできないため、答えは $1685$ となります。  

```input2
6
200 180 160 140 120 100
```

```output2
1000
```

この入力例では、$6$ 日間何もしないのが最適です。このとき、最終的な所持金は $1000$ 円となります。  

```input3
2
157 193
```

```output3
1216
```

この入力例では、$1$ 日目に $6$ 株を購入し、$2$ 日目に $6$ 株を売却すると、最終的な所持金が $1216$ 円となり、最適です。