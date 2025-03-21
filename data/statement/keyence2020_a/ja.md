配点 : $100$ 点

## 問題文

$H$ 行 $W$ 列の
マス目があり、最初すべてのマスは白色です。

あなたは、このマス目に何回かペイント操作を施すことにしました。
$1$ 回のペイント操作では、以下の $2$ 種類の作業のうちいずれか $1$ つが行えます。

- 行をひとつ選び、その行に含まれるマスをすべて黒く塗る。
- 列をひとつ選び、その列に含まれるマスをすべて黒く塗る。

黒く塗られているマスの個数が $N$ 個以上となるようにするためには、最小で何回のペイント操作が必要ですか。
なお、制約の項で記述される条件のもとで、何回かペイント操作を行うことで
黒く塗られているマスの個数が $N$ 個以上となるようにできることが保証されます。

## 制約

- $1 \leq H \leq 100$
- $1 \leq W \leq 100$
- $1 \leq N \leq H \times W$
- 入力値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$
> 
> $W$
> 
> $N$

## 出力

ペイント操作の回数の最小値を出力せよ。

```input1
3
7
10
```

```output1
2
```

「行をひとつ選び、その行に含まれるマスをすべて黒く塗る」という操作を異なる行に対して $1$ 回ずつ、
合計 $2$ 回行うことで、黒く塗られているマスの個数を $14$ にできます。

```input2
14
12
112
```

```output2
8
```

```input3
2
100
200
```

```output3
2
```