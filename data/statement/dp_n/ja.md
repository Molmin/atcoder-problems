配点 : $100$ 点

## 問題文

$N$ 匹のスライムが横一列に並んでいます。
最初、左から $i$ 番目のスライムの大きさは $a_i$ です。

太郎君は、すべてのスライムを合体させて $1$ 匹のスライムにしようとしています。
スライムが $1$ 匹になるまで、太郎君は次の操作を繰り返し行います。

- 左右に隣り合う $2$ 匹のスライムを選び、それらを合体させて新しい $1$ 匹のスライムにする。 合体前の $2$ 匹のスライムの大きさを $x$ および $y$ とすると、合体後のスライムの大きさは $x + y$ となる。 このとき、太郎君は $x + y$ のコストを支払う。 なお、合体の前後でスライムたちの位置関係は変わらない。

太郎君が支払うコストの総和の最小値を求めてください。

## 制約

- 入力はすべて整数である。
- $2 \leq N \leq 400$
- $1 \leq a_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## 出力

太郎君が支払うコストの総和の最小値を出力せよ。

```input1
4
10 20 30 40
```

```output1
190
```

次のように操作を行えばよいです。
操作対象のスライムを太字で表しています。

- (**10**, **20**, 30, 40) → (**30**, 30, 40)
- (**30**, **30**, 40) → (**60**, 40)
- (**60**, **40**) → (**100**)

```input2
5
10 10 10 10 10
```

```output2
120
```

例えば、次のように操作を行えばよいです。

- (**10**, **10**, 10, 10, 10) → (**20**, 10, 10, 10)
- (20, **10**, **10**, 10) → (20, **20**, 10)
- (20, **20**, **10**) → (20, **30**)
- (**20**, **30**) → (**50**)

```input3
3
1000000000 1000000000 1000000000
```

```output3
5000000000
```

答えは 32-bit 整数型に収まらない場合があります。

```input4
6
7 6 8 6 1 1
```

```output4
68
```

例えば、次のように操作を行えばよいです。

- (7, 6, 8, 6, **1**, **1**) → (7, 6, 8, 6, **2**)
- (7, 6, 8, **6**, **2**) → (7, 6, 8, **8**)
- (**7**, **6**, 8, 8) → (**13**, 8, 8)
- (13, **8**, **8**) → (13, **16**)
- (**13**, **16**) → (**29**)