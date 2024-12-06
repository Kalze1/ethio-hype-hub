from rest_framework.decorators import api_view
from rest_framework.response import Response
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load the GPT-2 model and tokenizer once when the server starts
model_name = 'gpt2'  # You can use 'gpt2-medium' or 'gpt2-large' for larger models
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

# Function to generate a response using GPT-2
def generate_gpt2_response(prompt):
    # Encode the input and generate output
    inputs = tokenizer.encode(prompt, return_tensors='pt', max_length=512, truncation=True)
    outputs = model.generate(inputs, max_length=150, num_return_sequences=1, no_repeat_ngram_size=2, 
                             temperature=0.7, top_k=50, top_p=0.95, pad_token_id=tokenizer.eos_token_id)
    
    # Decode the generated text
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Clean the response (optional)
    return response.strip()

@api_view(['POST'])
def chatbot_response(request):
    user_message = request.data.get('message')
    if not user_message:
        return Response({"error": "Message is required."}, status=400)

    # Generate the GPT-2 response
    bot_response = generate_gpt2_response(user_message)
    
    return Response({"response": bot_response})
